import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default function PostTwo() {
    return (
        <View>
            <Image
                style={{ width: win.width, height: 200 }}
                source={require('../assets/images/post-img.jpeg')}
            />
            <View style={{padding: 10}}>
                <Text style={{...styles.upperCase, margin: 5}}>
                    143 Likes &#183; 12 conversations
                </Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <View style={styles.button}>
                        <Image
                        style={styles.icon}
                        source={require('../assets/images/heart-like.png')}
                        />
                        <Text style={styles.upperCase}>like</Text>
                    </View>
                    <View style={styles.button}>
                        <Image
                        style={styles.icon}
                        source={require('../assets/images/comment-grey.png')}
                        />
                        <Text style={styles.upperCase}>conversation</Text>
                    </View>
                    <View style={styles.button}>
                        <Image
                        style={styles.icon}
                        source={require('../assets/images/share.png')}
                        />
                        <Text style={styles.upperCase}>share</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    upperCase: {
        textTransform: 'uppercase',
        fontSize: 10
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: '100%',
    },
    icon: {
        marginRight: 5,
        height: 15,
        width: 15
    },
    button: {
        flexDirection: 'row',
        paddingVertical: 10
    }
});

