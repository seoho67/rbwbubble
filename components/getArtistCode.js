const getArtistCode = (name) => {
    switch (name) {
        // ONEUS
        case '서 호':
            console.log('Artist: 이서호'); 
            return ('LSH'); 
            
        default: return undefined;
    }
};

export default getArtistCode;