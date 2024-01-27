import { StyleSheet, View, SafeAreaView, Image } from 'react-native' 
import Card from '../components/Card'  
import CustomText from '../components/CustomText'  
import CustomButton from '../components/CustomButton'
import React from 'react'

export default function Final({resetGame, number, answer}) {  
    return ( 
        <SafeAreaView style={styles.container}> 
        <View style={styles.header}>
          <CustomText>Game is over</CustomText>   
        </View>
        <Card>
            <View>
                <CustomText style={styles.text}>Here's your picture</CustomText>  
                <View style={styles.imageContainer}>
                    {parseInt(number) === answer ? (
                        <Image source={{
                            uri: "https://picsum.photos/id/1024/100/100",
                        }} style={styles.image} />
                    ) : (
                        <Image source={require('../images/lose-image.png')} style={styles.image} />
                    )} 
                </View>   
            </View>
            <CustomButton title="Start Again" onPress={resetGame} />    
        </Card>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        padding: 10,  
        justifyContent: 'flex-start', 
        alignItems: 'center',
        width: '85%',  
        alignSelf: 'center',
      }, 
    header:{ 
        marginBottom: 50
    }, 
    text:{ 
        textAlign: 'center',
    }, 
    image: { 
        width: 100, 
        height: 100, 
    }, 
    imageContainer: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 20, 
        marginTop: 20
    }, 
})