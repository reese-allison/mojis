from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from starlette.middleware.sessions import SessionMiddleware
from starlette.config import Config
from authlib.integrations.starlette_client import OAuth

config = Config('./.env')

oauth = OAuth()
oauth.register(
    client_id=config('GOOGLE_CLIENT_ID'),
    client_secret=config('GOOGLE_CLIENT_SECRET'),
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email'
    }
)

app = FastAPI(root_path="/api")
app.add_middleware(SessionMiddleware, secret_key=config('SECRET_KEY'))
app.mount("/static", StaticFiles(directory="backend/static"), name="static")


@app.get('/login/{method}', tags=['authentication'])
async def login(request: Request, method: str):
    url = request.url_for("auth", method=method)

    if method == 'google':
        return await oauth.google.authorize_redirect(request, url)
    elif method == 'facebook':
        ...
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')


@app.route('/auth/{method}')
async def auth(request: Request, method: str):
    if method == 'google':
        # Perform Google OAuth
        token = await oauth.google.authorize_access_token(request)
        user = await oauth.google.parse_id_token(request, token)

        # Save the user
        request.session['user'] = dict(user)

        return RedirectResponse(url='/')
    elif method == 'facebook':
        ...
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')


@app.get('/logout', tags=['authentication'])  # Tag it as "authentication" for our docs
async def logout(request: Request):
    # Remove the user
    request.session.pop('user', None)

    return RedirectResponse(url='/')
