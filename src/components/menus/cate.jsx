import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import "./cate.less";
export default class Cate extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            selectStyle:null,
            cateList:[
                {title:"专场",id:1},
                {title:"热销",id:2},
                {title:"折扣",id:3},
                {title:"爽口凉菜",id:4},
                {title:"风味盖饭",id:5},
                {title:"家常小炒",id:6},
                {title:"特色菜",id:7},
                {title:"小炒",id:8},
            ]
        }
    }
    activeTab(item){
        this.setState({selectStyle:item},()=>{
            this.props.onChangeCate&&this.props.onChangeCate(this.state.selectStyle) 
        })
    }
    render(){
        let {cateList,selectStyle} = this.state
        return(
            <View className="cate">
                {
                   cateList.map((item,index)=><View key={item.id} className={"cate_item " + ((selectStyle &&selectStyle.id==item.id)? "select" : "")} onClick={this.activeTab.bind(this,item)}>{item.title}</View>)
                }
            </View>
        )
    }
}