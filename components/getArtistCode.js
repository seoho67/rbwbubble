const getArtistCode = (name) => {
    switch (name) {
        // ONEUS
        case '서  호':
            console.log('Artist: 이서호'); 
            return ('LSH'); 
        case '건희':
            console.log('Artist: 이건희'); 
            return ('LKH');     

        default: return undefined;
    }
};

export default getArtistCode;
