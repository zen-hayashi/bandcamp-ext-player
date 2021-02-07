import React from 'react';
import styles from './media-button.scss';
import { faPlay, faPause, faStepForward, faStepBackward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MediaButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  type: 'play'|'pause'|'next'|'prev';
  onClick?: () => void;
}

export const MediaButton: React.FC<MediaButtonProps> = ({
  primary = false,
  backgroundColor,
  type,
  ...props
}) => {
  return (
    <button
      type="button"
      className={styles.mediaButton}
      style={{ backgroundColor }}
      {...props}
    >
      {
        type === 'play' &&
        <FontAwesomeIcon className={styles.icon} icon={faPlay}></FontAwesomeIcon>
      }
      {
        type === 'pause' &&
        <FontAwesomeIcon className={styles.icon} icon={faPause}></FontAwesomeIcon>
      }
      {
        type === 'next' &&
        <FontAwesomeIcon className={styles.icon} icon={faStepForward}></FontAwesomeIcon>
      }
      {
        type === 'prev' &&
        <FontAwesomeIcon className={styles.icon} icon={faStepBackward}></FontAwesomeIcon>
      }
      
    </button>
  );
};
