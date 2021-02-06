import React from 'react';
import './media-button.scss';
import { faPlay, faPause, faStepForward, faStepBackward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MediaButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  type: 'play'|'pause'|'next'|'prev';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MediaButton: React.FC<MediaButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  type,
  ...props
}) => {
  const mode = primary ? 'media-button--primary' : 'media-button--secondary';
  const icon = 'icon';
  return (
    <button
      type="button"
      className={['media-button', `media-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {
        type === 'play' &&
        <FontAwesomeIcon className={icon} icon={faPlay}></FontAwesomeIcon>
      }
      {
        type === 'pause' &&
        <FontAwesomeIcon className={icon} icon={faPause}></FontAwesomeIcon>
      }
      {
        type === 'next' &&
        <FontAwesomeIcon className={icon} icon={faStepForward}></FontAwesomeIcon>
      }
      {
        type === 'prev' &&
        <FontAwesomeIcon className={icon} icon={faStepBackward}></FontAwesomeIcon>
      }
      
    </button>
  );
};
