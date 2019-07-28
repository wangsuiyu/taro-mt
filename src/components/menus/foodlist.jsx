import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import './foodlist.less'
import Addcut from "../addcut/addcut";
export default class Foodlist extends Component {
    constructor(){
        super(...arguments)
        this.state = {
        }
    }
    render(){
   
        let {selectCate,currentList} = this.props
        return(
            <View className="foodlist">
               <Text className="title">{selectCate? selectCate.title : ""}</Text>
                <View>
                    {
                        currentList.map((item,index)=><View key={item.id} className="foodlist-li">
                            <Image src={item.img==2? require('../../assets/2.png'):require('../../assets/1.png')} className="foodlist-img"></Image>
                             <View className="foodlist-item">
                                 <Text>{item.title}</Text>
                                 <Text>月售{item.sole}</Text>
                                 <Text  className="price">￥{item.price}</Text>
                                 <Addcut food={item} />
                             </View>
                        </View>)
                    }
                </View>
            </View>
        )
    }
}