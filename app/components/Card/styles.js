import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    image:{ 
        flex: 1, 
        height: 400,
    },
    caption: {
        fontSize: 16,
        marginBottom: 10,
        color: '$blue',
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        color: '$orange',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
    }
});

export default styles;