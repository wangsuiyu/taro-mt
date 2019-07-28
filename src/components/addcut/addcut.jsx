import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import { AtInputNumber }  from 'taro-ui'
import './addcut.less'
import { getFood,setFood } from "../comment/comment";
export default class Addcut extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            value:0
        }
    }
    //增减菜品数据
    handleChange(value){
       this.setState({value},()=>{
          const foodKey = 'taro_meituan'
          let store = Taro.getStorageSync(foodKey) 
          store ? store : {}
          store[this.props.food.id] = {value:this.state.value,...this.props.food}
          Taro.setStorageSync(foodKey,store) 
       })
       
    }
    render(){
        return(
            <View className="addcut">
                <AtInputNumber
               min={0}
               max={10}
               step={1}
               value={this.state.value}
               onChange={this.handleChange.bind(this)}
             />
            </View>
        )
    }
}