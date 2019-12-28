import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import createShareCount from './utils/createShareCount';

function getTumblrShareCount(shareUrl: string, callback: (shareCount?: number) => void) {
  const endpoint = 'https://api.tumblr.com/v2/share/stats';

  return jsonp(
    endpoint +
      objectToGetParams({
        url: shareUrl,
      }),
    (err, data) => {
      callback(!err && data && data.response ? data.response.note_count : undefined);
    },
  );
}

export default createShareCount(getTumblrShareCount);
