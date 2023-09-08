import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: 'white', 
        height: 64, 
        alignItems:'center',
        flexDirection: 'row', 
        padding: 15
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop:2
    },
    artistName: {
        color: 'black',
        marginBottom: 5,
        fontSize:12
    },
    time: {
        fontSize: 10,
        color:'darkgrey',
        paddingBottom: 2,
        fontWeight: '400'
    },
    text: {
        paddingVertical: 8, 
        paddingHorizontal: 12, 
        lineHeight:22, 
        fontSize:14.8,
        borderRadius: 14, 
        maxWidth: 270,
    },
    date: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 11,
        borderColor: 'lightgrey',
        borderTopWidth: 0.5,
        padding: 5,
        marginVertical: 10
    },
    container: {
        backgroundColor:'#FFFFFF', 
        flex:1
    },
    contentContainer: {
        paddingHorizontal: 20, 
        paddingVertical: 10
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    profileContainer: {
        borderRadius: 28, 
        borderColor:'#2B46A5', 
        borderWidth:1.5, 
        padding:2
    },
    centeredContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        width: 50,
    },
    buttonText: {
        fontSize: 36,
        textAlign: 'center',
        
    },
    modal: {
        width: 250,
        height: 200,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    okButton:{
        backgroundColor: '#2B46A5',
        color: '#FFF',
        textAlign: 'center',
        padding: 8,
        margin: 5,
        borderRadius: 5
    },
    cancelButton: {
        color: '#2B46A5',
        textAlign: 'center',
        borderColor: '#2B46A5',
        padding: 8,
        margin: 5,
        borderRadius: 5
    },
    modalTitle: {
        fontWeight:'bold', 
        color: 'gray', 
        fontSize: 15,
        margin: 10,
        marginBottom: 5
    },
    fileSelectButton: {
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        backgroundColor: 'gray',
        borderRadius: 5,
        color: '#FFF',
        fontWeight:'bold'
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'center'
    },
    lastMsg: {
        color: 'darkgray', 
        fontSize: 12
    },
    boldName: {
        fontWeight: 'bold', 
        fontSize: 16
    },
    itemContainer: {
        marginBottom: 15, 
        height: 65
    },
    err: {
        color: 'white', 
        backgroundColor:'gray', 
        borderTopLeftRadius: 0
    },
    voiceCircle: {
        borderColor: 'black', 
        borderWidth: 2, 
        width: 24, 
        height: 24, 
        borderRadius: 12, 
        justifyContent: 'center', 
        paddingLeft: 2,
        marginRight: 2
    },
    videoCircle:{
        borderColor: 'white', 
        borderWidth: 3, 
        width: 36, 
        height: 36, 
        borderRadius: 18, 
        justifyContent: 'center', 
        paddingLeft:3
    },
    videoOverlay: {
        backgroundColor: 'black', 
        opacity: 0.4, 
        top:0, 
        position:'absolute', 
        borderRadius: 15, 
        borderTopLeftRadius: 0, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    backgroundOverlay: {
        backgroundColor:'#00000050', 
        position:'absolute', 
        top:0, 
        width: '100%', 
        height:'100%'
    },
    profileBox: {
        position:'absolute', 
        bottom:0, 
        alignItems:'center', 
        width: '100%'
    },
    moreItem: {
        backgroundColor: 'white', 
        minHeight: 65, 
        justifyContent: 'center', 
        padding: 10, 
        marginBottom:10, 
        borderRadius: 10
    },
    textinput: {
        borderBottomWidth:1,
        padding: 5, 
        lineHeight: 20
    },
    credit: {
        color: '#444444'
    },
    numbered: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    number: {
        fontSize: 16, 
        width: 20, 
        borderColor: 'lightgrey', 
        borderRightWidth: 0.5, 
        marginRight: 10
    },
    detail: {
        padding: 15
    },
    opened: {
        borderColor: '#2B46A5', 
        borderWidth: 2
    }
});

export default styles;