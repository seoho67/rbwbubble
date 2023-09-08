import { Text, View, FlatList, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import * as DocumentPicker from 'expo-document-picker';

import styles from './styles';
import getData from './getData';
import storeData from './storeData';
import dateSort from './dateSort';
import msgToObj from './msgToObj';

import removeData from './removeData';
import getArtistCode from './getArtistCode';

import Artists from '../assets/Artists.json'


var myChatList;

const getMyChats = async (Artists) => {
    myChatList = await getData('myChats');
    console.log('get my chats');
    console.log(myChatList);
    let data = [];
    if (myChatList != null) {
        for (const code in myChatList){
            //console.log(code);
            data.push({
                artist: Artists[code],
                nickname: myChatList[code].nickname,
                lastMessage: myChatList[code].lastMessage
            });            
        }
    }
    else {
        myChatList={};
    }
    //console.log(data);
    return data;
}



const MyChats = ({ navigation, route }) =>{
    //Artists = route.params.Artists;
    
    const [data, setData] = useState([]);
    const fetchData = async()=> {
        setData( await getMyChats(Artists));
    }

    useEffect( ()=> {
        fetchData();
        console.log(data);

        navigation.setOptions({
            headerRight: ()=>(
                <TouchableOpacity style={[styles.addButton, styles.centeredContainer]}
                    onPress={() => {
                        setNewArtistNickname('');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>)
        })
    },[]);
    
    const [modalVisible, setModalVisible] = useState(false);

    const [txtParse, setTxtParse] = useState([]); 
    
    const [newArtistNickname, setNewArtistNickname] = useState();

    const _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        //console.log(result);
        //setFileName(result.name)
    
        fetch(result.uri).then(function(response) {
            response.text().then(function(text) {
                let _nickname = text.match(/.*님/)[0];
                if (_nickname.length > 2){
                    setNewArtistNickname(_nickname.slice(0, _nickname.length-1).match(/[^\[].*[^\] ]/)[0]);
                }
                else {
                    setNewArtistNickname(_nickname.slice(0, _nickname.length-1));
                }
                
                let tmp = text.split('\n');
                let tmp2 = [];
                for (let i = 0; i < tmp.length; i++){
                    // 마지막 글자 \r 삭제
                    //tmp[i] = tmp[i].replace(/\r$/, '');
                    
                    if(tmp[i].match(/^(?:20\d{2}-\d{2}-\d{2} \d{2}:\d{2})/g) ){
                        let e = tmp[i].replace(/\r$/, '');
                        while( tmp[i+1] ){
                            if (tmp[i+1].match(/^(?:20\d{2}-\d{2}-\d{2} \d{2}:\d{2})/g)){
                                break;
                            }
                            else {
                                e += ('\n'+tmp[++i].replace(/\r$/, ''));
                            }
                        }
                        //console.log(e);
                        tmp2.push(e)
                    }
                }
                setTxtParse(tmp2);
            });
        });
    }
    
    const _dataProcessing = () => {
        //let tmp = txtParse[txtParse.length-1].split(' : ');
        let lastMessage = txtParse[txtParse.length-1].split(' : ')[1];
        
        let name = txtParse[0].split(' : ')[0].split(', ')[1];
        console.log(name);
        let newArtistCode = getArtistCode(name);
        console.log(newArtistCode);
        if (newArtistCode) {
            myChatList[newArtistCode] = {
                nickname: newArtistNickname,
                lastMessage: lastMessage
            };
            storeData({value: myChatList, storageKey: 'myChats'});

            let txtObjArr = [];
            console.log(newArtistCode);
            txtParse.forEach( element => txtObjArr.push(msgToObj(element)) );
            storeData({value: dateSort(txtObjArr), storageKey: newArtistCode});
        }
        else {
            Alert.alert( '주의', '프로필이 제공되지 않는 아티스트입니다.')
        }

        return newArtistCode;

    }

    const AddChat = () => {
        return (
            <View style={[{flex: 1, backgroundColor: '#00000055'},styles.centeredContainer]}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>내 채팅 불러오기</Text>
                    <View style={[styles.centeredContainer, {flex:1}]}>
                        <TouchableOpacity 
                            onPress={_pickDocument}>
                            <Text style={styles.fileSelectButton}>파일 선택</Text>
                        </TouchableOpacity>
                        <Text style={newArtistNickname? {display: 'flex'}: {display: 'none'}}>
                            {newArtistNickname}님과의 채팅
                        </Text>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => {
                                setNewArtistNickname('');
                                setTxtParse([]);
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={styles.cancelButton}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}
                            onPress={ () => {
                                const newArtistCode = _dataProcessing();
                                if (newArtistCode){
                                    setModalVisible(!modalVisible); 
                                    fetchData(); 
                                    navigation.navigate('ChatRoom',{artist: Artists[newArtistCode], nickname: newArtistNickname, full: false, userName:''}); 
                                }
                            }}
                        >
                            <Text style={styles.okButton}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    
    const renderItem = ({item}) => {
        //console.log(item);
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity style={{flexDirection: 'row'}}
                    onPress={ ()=> {navigation.navigate('ChatRoom',{artist: item.artist, nickname: item.nickname, full: false, userName:''})} }
                >
                    <View>
                        <View style={styles.profileContainer}>
                            <Image source={{uri: item.artist.profile}} 
                                style={styles.profile}
                            />
                        </View>
                        <View style={{flex:1}}/>
                    </View>
                    
                    <View style={{ marginLeft: 10, flex: 1}}>
                        <Text style={[styles.boldName, {marginBottom: 2}]}>
                            {item.nickname}
                        </Text>
                        <Text style={styles.lastMsg}
                            numberOfLines={2} ellipsizeMode='tail'>
                            {item.lastMessage}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
    return (
        <View style={styles.container}>
            <Modal
                transparent={true}                
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => {
                    setNewArtistNickname('');
                    setTxtParse([]);
                    setModalVisible(!modalVisible);
                }}
            >
                <AddChat/>
            </Modal>
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
                ListEmptyComponent={ <Text style={{color: '#333333', fontSize: 14}}>우측 상단 + 버튼을 눌러 채팅을 추가해주세요.</Text> }
            />            
        </View>
    );
}

export default MyChats;