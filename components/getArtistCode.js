const getArtistCode = (name) => {
    switch (name) {
        // ONEUS
        case '서  호':
            console.log('Artist: 이서호'); 
            return ('LSH'); 
        case '이도':
            console.log('Artist: 김건학'); 
            return ('KKH');     
        case '건희':
            console.log('Artist: 이건희'); 
            return ('LKH'); 
        case '화눙':
            console.log('Artist: 여환웅'); 
            return ('YHW'); 
        case '시온이💜':
            console.log('Artist: 손동주'); 
            return ('SDJ'); 

        default: return undefined;
    }
};

export default getArtistCode;
