// import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';



const Budget = () => {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
            className='justify-center items-center  '
        >

            <Text>Budget</Text>

            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={75}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />


            {/* <Progress>
                <ProgressFilledTrack />
            </Progress> */}






        </SafeAreaView>
    )
}

export default Budget

const styles = StyleSheet.create({})