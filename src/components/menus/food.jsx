import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cate from "./cate";
import Foodlist from "./foodlist";
import './food.less'

export default class Food extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            current: 0,
            tabList:[{ title: '点菜' }, { title: '评论（2014）' }, { title: '商家' }],
            foodList:[],
            currentList:[],
            selectCate:null
        }
    }
    changeTab(value){
        this.setState({
            current : value
        })
    }
    //切换分类
    changeCate(data){
        //判断原数据中是否存在分类，some返回布尔值
       this.setState({selectCate:data})
       if(this.state.foodList.some(item=>item.pid==data.id)){
           this.setState({currentList:this.state.foodList.filter(item=>item.pid==data.id)})
       }else{
         //没有的数据的话需要重新请求数据
           this.setState({foodList:this.state.foodList.concat(this.getData(data))},()=>{
               this.setState({currentList:this.state.foodList.filter(item=>item.pid==data.id)})
           })
       }
       
    }
    //请求数据的方法
    getData(data){
        let count = Math.round(Math.random()*3)
        return Array.from(Array(Math.round(Math.random()*20)),(v,i)=>({price:Math.round(Math.random()*20),sole:Math.round(Math.random()*50),img:count,pid:data.id,id:data.id+"_"+i,title:"分类"+data.id+"菜品"+(i+1)}))
    }
    render(){
        let {tabList,current,currentList,selectCate} = this.state
        return(
            <View className="food">
                  <AtTabs current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
                      <AtTabsPane current={current} index={0} >
                        <View className="list">
                           <Cate onChangeCate={this.changeCate.bind(this)} />
                           <Foodlist currentList={currentList} selectCate={selectCate} />
                        </View>
                      </AtTabsPane>
                      <AtTabsPane current={current} index={1}>
                        <View>标签页二的内容</View>
                      </AtTabsPane>
                      <AtTabsPane current={current} index={2}>
                        <View>标签页三的内容</View>
                      </AtTabsPane>
                 </AtTabs>
            </View>
        )
    }
}