module.exports = {
  encodeDecode: encodeDecode,
  optimizedEncodeDecode: optimizedEncodeDecode
};
/*
    TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

    There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

    Implement the Solution class:

    Solution() Initializes the object of the system.
    String encode(String longUrl) Returns a tiny URL for the given longUrl.
    String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

    Constraints:
        1 <= url.length <= 104
        url is guranteed to be a valid URL.


*/
function encodeDecode(longURL) {
    /*
    Time Complexity - O(1) ahah
    Space Complexity - O(1)

    * @param {string} longUrl
    * @return {string}
    */
    let encode = (longURL) => {
        return longURL;
    };
    let decode = (shortURL) => {
        return shortURL;
    }
    return decode(encode(longURL));
}

function optimizedEncodeDecode(longURL) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {string} longUrl
    * @return {string}
    */
    let encode = (longURL) => {
        let result = '';
        for (let s of longURL) {
            result += `${s.length}#${s}`;
        }
        return result;

    };
    let decode = (shortURL) => {
        let result = [];
        let i = 0;
        while (i < shortURL.length) {
            let j = i;
            while (shortURL[j] !== '#') {
                j++;
            }
            let length = parseInt(shortURL.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            result.push(shortURL.substring(i, j));
            i = j;
        }
        return result;

    }

    return decode(encode(longURL));

}