import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };
  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        우편번호 검색
      </Button>
      <div> 내 주소 : {myAddress}</div>
      <div> 내 우편번호: {myZonecode} </div>
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
