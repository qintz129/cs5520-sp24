import { StyleSheet, View, SafeAreaView} from 'react-native' 
import Card from '../components/Card'  
import CustomText from '../components/CustomText'
import React from 'react' 
import CustomButton from '../components/CustomButton'

export default function Game({dismissModal, name, number, attempts, finalModal, answer}) {  
    const num = parseInt(number); 
    return ( 
        <SafeAreaView style={styles.container}> 
        {num != answer ? (
        <Card>
            <View>
            <CustomText style={styles.text}>Hello {name}</CustomText>
            <CustomText style={styles.text}>You have chosen {number}</CustomText>
            <CustomText style={styles.text}>That's not my number!</CustomText> 
            {attempts > 0 && (
                            <CustomText style={styles.text}>
                                {num < answer ? 'Guess higher!' : 'Guess lower!'}
                            </CustomText>
                        )}
            <CustomText style={styles.text}>You have {attempts > 0 ? attempts : 'no'} attempts left!</CustomText> 
            </View>  
            <CustomButton title="I am done" onPress={finalModal} />
            <CustomButton title="Let Me Guess Again" onPress={dismissModal} disabled={attempts === 0} />
        </Card>   
        ) : ( 
        <Card>
            <View>
            <CustomText style={styles.text}>Congrats {name}! You won!</CustomText>
            </View>  
            <CustomButton title="Thank you!" onPress={finalModal} /> 
        </Card>
        ) 
        }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1, 
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center',  
      },  
      text: {
        textAlign: 'center', 
      },
})