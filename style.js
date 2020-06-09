import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        display: 'flex',
        justifyContent: 'center',
    },

    imageLogo : {
        width: 250,
        resizeMode: 'contain',
    },

    // gamerContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    // },

    gamer: {
        display: 'flex',
        paddingBottom: 10,
    },

    textPlayer: {
        color: '#fffa65',
        fontSize: 18,
    },

    newGameBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        padding: 10,
        width: 100,
        backgroundColor: '#686de0',
        borderRadius: 15,
    },

    textBtn: {
        color: '#fffa65',
        fontSize: 16
    }
})