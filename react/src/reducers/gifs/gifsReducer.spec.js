import { RECIEVE_GIPHY_RESPONSE } from '../../constants/actionTypes';
import { gifsReducer } from './gifsReducer';

describe('Gifs Reducer', () => {

    it('should set the default state when no state is passed in', () => {
        const expected = [];
        const action = {};
        const actual = gifsReducer([], action);

        expect(actual).toEqual(expected);
    });

    it('should handle a RECIEVE_GIPHY_RESPONSE correctly', () => {
        const initialState = [
            {
                "type": "gif",
                "id": "iNMz8LF8y3g4",
                "slug": "iNMz8LF8y3g4",
                "url": "http://giphy.com/gifs/iNMz8LF8y3g4",
                "bitly_gif_url": "http://gph.is/1yxC1c9",
                "bitly_url": "http://gph.is/1yxC1c9",
                "embed_url": "http://giphy.com/embed/iNMz8LF8y3g4",
                "username": "",
                "source": "http://reddit.com/r/gifs/comments/2nyyhc/puppy_has_had_enough_of_bullying/",
                "rating": "g",
                "content_url": "",
                "source_tld": "reddit.com",
                "source_post_url": "http://reddit.com/r/gifs/comments/2nyyhc/puppy_has_had_enough_of_bullying/",
                "is_indexable": 0,
                "import_datetime": "2014-12-01 20:02:11",
                "trending_datetime": "1970-01-01 00:00:00",
                "images": {
                    "fixed_height": {
                        "url": "http://media0.giphy.com/media/iNMz8LF8y3g4/200.gif",
                        "width": "267",
                        "height": "200",
                        "size": "3180043",
                        "mp4": "http://media0.giphy.com/media/iNMz8LF8y3g4/200.mp4",
                        "mp4_size": "111978",
                        "webp": "http://media0.giphy.com/media/iNMz8LF8y3g4/200.webp",
                        "webp_size": "751832"
                    }
                }}];

                const data = [
                      {
                          "type": "gif",
                          "id": "Wb1LlsyoZ2fHq",
                          "slug": "puppies-Wb1LlsyoZ2fHq",
                          "url": "http://giphy.com/gifs/puppies-Wb1LlsyoZ2fHq",
                          "bitly_gif_url": "http://gph.is/2ctkQY1",
                          "bitly_url": "http://gph.is/2ctkQY1",
                          "embed_url": "http://giphy.com/embed/Wb1LlsyoZ2fHq",
                          "username": "",
                          "source": "http://smackonyou.com/cute-puppies-and-kittens-playing-together",
                          "rating": "g",
                          "content_url": "",
                          "source_tld": "smackonyou.com",
                          "source_post_url": "http://smackonyou.com/cute-puppies-and-kittens-playing-together",
                          "is_indexable": 0,
                          "import_datetime": "2016-09-10 23:05:04",
                          "trending_datetime": "0000-00-00 00:00:00",
                          "images": {
                              "fixed_height": {
                                  "url": "http://media3.giphy.com/media/Wb1LlsyoZ2fHq/200.gif",
                                  "width": "216",
                                  "height": "200",
                                  "size": "81592",
                                  "mp4": "http://media3.giphy.com/media/Wb1LlsyoZ2fHq/200.mp4",
                                  "mp4_size": "16746",
                                  "webp": "http://media3.giphy.com/media/Wb1LlsyoZ2fHq/200.webp",
                                  "webp_size": "101544"
                              }
                          }
                      }
                  ];

          const action = { type: RECIEVE_GIPHY_RESPONSE, data };
          const expected = data;
          const actual = gifsReducer(initialState, action);

          expect(actual).toEqual(expected);
    });
});
