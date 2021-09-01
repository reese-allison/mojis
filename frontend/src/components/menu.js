import { h, Fragment, Component, options } from 'preact';
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import pageStyle from '../styles/pages'
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            gradient: 'lemon',
            g_html: '',
            body: 'cute',
            b_html: '',
            eyes: 'cute',
            e_html: '',
            mouth: 'cute',
            m_html: '',
            change: '',
            list: {},
        }
        this.onChange = this.onChange.bind(this)
    }
    
    /** @jsx h */
    /** @jsxFrag Fragment */

    fetch_html(url, tag){
        const local_route = {
            'gradient': "api/part/gradients/"+this.state.gradient,
            'body': "api/part/bodies/"+this.state.body,
            'eyes': "api/part/eyes/"+this.state.eyes,
            'mouth': "api/part/mouths/"+this.state.mouth,
        }
        fetch(local_route[url])
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({[tag]: content})
        })
        .catch(function(error){
            console.log(error)
        });
    }

    componentWillMount(){
        fetch("api/list")
        .then(load => {
            return load.json()
        })
        .then(json => {
            this.setState({list: json})
        }).catch(error =>{
            console.log(error)
        });
        this.fetch_html('gradient', 'g_html')
        this.fetch_html('body', 'b_html')
        this.fetch_html('eyes', 'e_html')
        this.fetch_html('mouth', 'm_html')

    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.gradient !== this.state.gradient){
            this.setState({change: 'gradient'})
        }
        if (prevState.body !== this.state.body){
            this.setState({change: 'body'})
        }
        if (prevState.eyes !== this.state.eyes){
            this.setState({change: 'eyes'})
        }
        if (prevState.mouth !== this.state.mouth){
            this.setState({change: 'mouth'})
        }
        console.log(this.state.change)
    }

    onChange = (event) =>{
        const {value, name} = event.target
        const tag_list = {
            'gradient' : 'g_html',
            'body' : 'b_html',
            'eyes' : 'e_html',
            'mouth' : 'm_html'
        }
        this.setState({[name]: value}, () =>{
            this.fetch_html('gradient', tag_list[name] //Gradient Swap fixed
            )
        } )
        console.log('onChange Called!')
        /*
        console.log(event.name)
        const {type, value, html_tag} = event.target
        this.fetch_html('gradient', html_tag)
        //this.setState({[html_tag]: value})
        this.setState({[type]: event.target.value})
        console.log(type)*/
    }

    Selection = (props) => {
        const pageclass = pageStyle();
        /*
        var selectArray = []
        Object.keys(this.state.list).map((key) => {
            selectArray.push(
                h(InputLabel, {id: key+'_label'},
                h(Select, {
                    labelId: key+'_label',
                    name: key,
                    value: this.state[key],
                    className: pageclass.pageMenu,
                    onchange: this.props.func
                }, Object.values(this.state.list[key]).map((menuitem) => {
                    return(h(MenuItem, {value: menuitem},menuitem))
                })), key)
                )
        }) */
        /*
        console.log(selectArray)
        console.log(key)
            console.log(this.state.list[key])
            console.log(typeof(this.state.list[key]))
        */
       return(
        <div>
            {Object.keys(this.state.list).map((key) => (
                <div>
                <InputLabel id={key+'_label'}>{key}</InputLabel>
                <Select labelId={key+'_label'} name={key} value={this.state[key]} className={pageclass.pageMenu} onchange={e => this.onChange(e)}>
                    {Object.values(this.state.list[key]).map((menuitem) => (
                        <MenuItem value={menuitem}>{menuitem}</MenuItem>
                    ))}
                </Select>
                </div>))
                }
        </div>)
    }

    render(props, state){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter} >
                <svg style={{padding: "0% 40% 0% 40%"}} xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 600 600">
                <defs>
                    <g id="gradients" dangerouslySetInnerHTML={{__html: this.state.g_html}}> 
                        </g>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g id="bodies" dangerouslySetInnerHTML={{__html: this.state.b_html}}>
                <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="black"  />
                <path fill="url(#moji-menu-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                </g>
                <g id="eyes" dangerouslySetInnerHTML={{__html: this.state.e_html}}></g>
                <g id="mouths" dangerouslySetInnerHTML={{__html: this.state.m_html}}></g>  
                </svg>
                <div>
                <this.Selection/>
                <InputLabel id="grad_label">FUNCTIONAL SELECT</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" name="gradient" value={this.state.gradient} onChange = {this.onChange}>
                    <MenuItem value="lemon">lemon</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
        </div>
            </div>
        )
    }

}

export default Menu

/*

                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" name="gradient" value={this.state.gradient} onChange = {this.handleChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
                
*/