import { h, Fragment, Component, options, render } from 'preact';
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import pageStyle from '../styles/pages'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gradient: 'lemon',
            g_html: '',
            mouth: 'pumpkin',
            m_html: '',
            eyes: 'dot',
            e_html: '',
            body: 'devil',
            b_html: '',
            headwear: 'tophat',
            h_html: '',
            pattern: 'whisker',
            p_html: '',
            shadow: '',
            clip: '',
            list: Array(),
            head_keys: Array(),
            list_called: false

        }
    }
    /**  @jsx h */
    /** @jsxFrag Fragment */

    renderSelection = () => {
        var to_render = [];
        if (this.state.list_called){
            this.state.head_keys.map((element) => {
                to_render.push(<SelectList index={element} sub_list={this.state.list[element]} pass_value={this.state[element]} onChange={this.onChange}/>)
            })
            //console.log(to_render)
        } else {
            to_render = <div> NO LIST LOADED </div>
        }
        return(
            <div>
                {to_render}
            </div>
        )
    }

    onChange = (event) =>{
        const {value, name} = event.target
        const tag_list = {
            'gradient' : 'g_html',
            'body' : 'b_html',
            'eyes' : 'e_html',
            'mouth' : 'm_html',
            'pattern' : 'p_html',
            'headwear' : 'h_html' //This list is still required for states
        }
        this.setState({[name]: value}, () =>{
            this.fetch_html(name, tag_list[name])
        } )
        //console.log('onChange Called!')
    }

    fetch_html(part, tag){
        fetch('api/part/'+part+'/'+this.state[part])
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

    componentWillMount() {
        fetch('api/list')
        .then(call => {
            return call.json();
        })
        .then(response => {
            //console.log(response)
            this.setState({list: response['body']}, () =>{
                this.setState({head_keys: Object.keys(this.state.list)})
                this.setState({list_called: true})
                this.setState({shadow: response['shadow']}) //added shadow and proper pattern placement
                this.setState({clip: response['bodyclip']})
            })
        }).catch(error => {
            console.log(error)
        })
        this.fetch_html('gradient', 'g_html')
        this.fetch_html('body', 'b_html')
        this.fetch_html('eyes', 'e_html')
        this.fetch_html('mouth', 'm_html')
        this.fetch_html('headwear', 'h_html')
        this.fetch_html('pattern', 'p_html')
    }
    
    render() {
        const pageclass = pageStyle();
        //console.log(this.state)
        return (
        <div className={pageclass.pageCenter}>
            <svg width="477" height="509" viewBox="-50 -50 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <g id="gradients" dangerouslySetInnerHTML={{__html: this.state.g_html}}></g>
                    <g id="body-clip" dangerouslySetInnerHTML={{__html: this.state.clip}}></g>
                </defs>
                <g id="shadow" dangerouslySetInnerHTML={{__html: this.state.shadow}}></g>
                <g id="bodies" dangerouslySetInnerHTML={{__html: this.state.b_html}}></g>
                <g id="headwear" dangerouslySetInnerHTML={{__html: this.state.h_html}}></g>
                <g clip-path="url(#body-clip-menu)">
                    <g id="patterns" dangerouslySetInnerHTML={{__html: this.state.p_html}}></g>
                    <g id="eyes" dangerouslySetInnerHTML={{__html: this.state.e_html}}></g>
                    <g id="mouths" dangerouslySetInnerHTML={{__html: this.state.m_html}}></g> 
                </g>
            </svg>
            <div id="select_list">
                <this.renderSelection/>
            </div>
        </div>)
    }
}

class SelectList extends Component {
    constructor(props){
        super(props)
        this.state={
            sub_list: Array(),
            key: Array(),
            props_called:false
        }
        //console.log("SELECTLIST INITIALIZED")
    }

    

    renderThis = () => {
        if (this.state.props_called){
            const pageclass = pageStyle();
            //console.log("SELECTLIST IS LOADING")
            return(
                <div>
                    <InputLabel id={this.state.key+'_label'}>{this.state.key}</InputLabel>
                    <Select labelId={this.state.key+'_label'} name={this.state.key} value={this.props.pass_value} className={pageclass.pageMenu} onChange={this.props.onChange}>
                        {this.state.sub_list.map((menuitem) => {
                            return(<MenuItem value={menuitem}>{menuitem}</MenuItem>)
                        })}
                    </Select>
                </div>
            )
        } else {
            //console.log("SELECTLIST IS NOT LOADING")
            return(
                <div>PROPS NOT CALLED</div>
            )
        }

    }

    componentWillUpdate(){
        //console.log("SELECTPROPS")
        //console.log(this.props)
        if (this.props.sub_list && this.props.index){
            this.setState({sub_list: this.props.sub_list})
            this.setState({key: this.props.index})
            this.setState({props_called: true})
        }
    }

    componentDidUpdate(){}

    render(){
        //console.log('SELECTLIST CALLED')
        const pageclass = pageStyle();
        return(
        <div>
            <this.renderThis/>
        </div>
        )
    }
}

export default Menu