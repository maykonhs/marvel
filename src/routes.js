import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Creators from './screens/Creators'
import Characters from './screens/Characters'
import Comics from './screens/Comics'
import Events from './screens/Events'
import Series from './screens/Series'
import Stories from './screens/Stories'

const Routes = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Characters,
      Creators,
      Comics,
      Events,
      Series,
      Stories
    },
    {
      tabBarOptions: {
        activeTintColor: '#ED1D24',
        inactiveTintColor: '#FFF',
        indicatorStyle: {
          color: '#00F'
        },
        style: {
          backgroundColor: '#000',
        },
      }
    }
  )
)

export default Routes