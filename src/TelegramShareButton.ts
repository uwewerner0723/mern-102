import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function telegramLink(url: string, { title }: { title?: string }) {
  assert(url, 'telegram.url');

  return (
    'https://telegram.me/share/' +
    objectToGetParams({
      url,
      text: title,
    })
  );
}

const TelegramShareButton = createShareButton<{ title?: string }>(
  'telegram',
  telegramLink,
  props => ({
    title: props.title,
  }),
  {
    title: PropTypes.string,
  },
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default TelegramShareButton;
