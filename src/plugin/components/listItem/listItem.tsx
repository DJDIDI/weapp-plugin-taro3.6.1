import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import './listItem.less'

interface IListItem {
  name: string,
  value: string
}

export default class ListItem extends Component<IListItem, any> {
  render () {
    const { name, value } = this.props
    return (
      <View>
        <View>name: {name}</View>
        <View>value: {value}</View>
      </View>
    )
  }
}
