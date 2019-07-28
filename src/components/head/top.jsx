import Taro,{ Component } from "@tarojs/taro"
import { View , Text } from "@tarojs/components";
import { AtIcon } from 'taro-ui'
import "./top.less";

export default class Top extends Component {
    render(){
        return(
            <View className="top">
                <View className="left">
                  <AtIcon value='chevron-left'></AtIcon>
                </View>
                <View className="right">
                  <AtIcon className="fonts" value='search'></AtIcon>
                  <AtIcon className="fonts" value='star'></AtIcon>
                  <AtIcon className="fonts" value='external-link'></AtIcon>
                  <AtIcon className="fonts" value='bullet-list'></AtIcon>
                </View>
            </View>
        )
    }
}