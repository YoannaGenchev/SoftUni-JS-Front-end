function modernTimesHashTag(input) 
{
    let words = input.split(' ');
    
    let validHashtags = [];

    for (let word of words) 
        {
        if (word.startsWith('#')) 
        {
            let hashtag = word.substring(1);
            
            if (hashtag.length > 0 && /^[a-zA-Z]+$/.test(hashtag)) 
            {
                validHashtags.push(hashtag);
            }
        }
    }
    
    for (let hashtag of validHashtags) {
        console.log(hashtag);
    }

}
