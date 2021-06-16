import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';


export default function PostOne() {
    return (
        <View style={{ ...styles.postContainer, padding: 30 }}>
            <View style={{  flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/images/user.jpeg')}
                    />
                    <View>
                        <Text style={styles.title}>Loretta Douglas</Text>
                        <Text style={styles.upperCase}>12 min ago</Text>
                    </View>
                </View>
                <View style={{ ...styles.container, flexDirection: 'row' }}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/heart.png')}
                    />
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/comment.png')}
                    />
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/share.png')}
                    />
                </View>
            </View>
            <View>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet libero dolore, reprehenderit eligendi qui aliquid rerum quia distinctio voluptas officiis odio totam tenetur accusamus, laborum voluptatibus fugiat molestias aliquam!
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/eye.png')}
                    />
                    <Text>356</Text>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/comment-grey.png')}
                    />
                    <Text>23</Text>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/heart-like.png')}
                    />
                    <Text>145</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <View>
                    <Text style={{ fontWeight: '600', marginBottom: 10 }}>Shared With</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.userImg}
                            source={require('../assets/images/user.jpeg')}
                        />
                        <Image
                            style={styles.userImg}
                            source={require('../assets/images/user.jpeg')}
                        />
                        <Image
                            style={styles.userImg}
                            source={require('../assets/images/user.jpeg')}
                        />
                        <Image
                            style={styles.userImg}
                            source={require('../assets/images/user.jpeg')}
                        />
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
    postContainer: {
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
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
    userImg: {
        height: 32,
        width: 32,
        marginRight: 5,
        borderRadius: 50,
    },
    icon: {
        height: 15,
        width: 15,
        margin: 10,
    }
});
