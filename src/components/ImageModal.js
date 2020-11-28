import React, { } from "react";
import { Modal } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
const ImageModal = ({ visible, data, index, close }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <ImageViewer imageUrls={data} index={index}
        enableImageZoom={true}
        enableSwipeDown={true}
        onSwipeDown={close}
      />
    </Modal>
  )
}

export default ImageModal;