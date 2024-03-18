import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { decrementAction, getUsersBooks, incrementAction } from '../store/actions/counterActions'

import { RootState } from '../store/store'


const CounterScreen = () => {

  const { count, books }           = useSelector((state: RootState) => state.counterData)
  const { userName, isSignedIn }   = useSelector((state: RootState) => state.userData)

  const navigation                 = useNavigation()
  const dispatch                   = useDispatch()

  useEffect(() => {
    dispatch(getUsersBooks())
  }, []) 


  /*
  console.log("------------------- User books ---------------------------------")
  console.log( JSON.stringify(books, null, 2) )
  console.log("----------------------------------------------------------------")
  */

  return (
    <View style={tw`flex-1 items-center justify-center gap-y-6`} >
      <Text  style={tw`text-3xl font-bold text-zinc-600`} > Mr : {userName} </Text>

      <View  style={tw`flex items-center justify-center p-12 border border-zinc-400 rounded-xl`} >
        <Text  style={tw`text-3xl font-bold text-zinc-600`}> {count} </Text>
      </View>

      <View className="flex flex-row items-center justify-evenly w-full"> 

        <TouchableOpacity  onPress={() => dispatch(incrementAction()) }  className="py-3 px-5  bg-blue-500  rounded-xl flex items-center justify-center">
          <Text className="text-3xl font-bold text-gray-50">+</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => dispatch(decrementAction()) }  className="py-3 px-5  bg-blue-500 rounded-xl flex items-center justify-center">
          <Text className="text-3xl font-bold text-gray-50">-</Text>
        </TouchableOpacity>

      </View>

      <View style={tw`flex-row justify-center`} >
        <Text> Go to home screnn ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={tw.style('text-sky-600')} > 
                    Here 
              </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )


}


export default CounterScreen


