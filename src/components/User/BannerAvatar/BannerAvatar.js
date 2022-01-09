import React, {useState} from "react";
import { Button } from "react-bootstrap";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import ConfigModal from "../../Modal/ConfigModal";

export default function BannerAvatar(props) {
  const { user, logginedUser } = props;
  const [showModal, setShowModal] = useState(false)
  // const { user } = props;
  const bannerUrl = "NotImplement";
  const avatarUrl = user?.avatar ? "NotImplement" : AvatarNoFound;

  // console.log(user);
  // console.log(logginedUser);
  return (
    // <div className="banner-avatart" style={{ backgroundImage: `url('${bannerUrl}')` }}>
    <div className="banner-avatart">
      <h2>Not Implement BannerAvatar...</h2>
    <div 
      className="avatar" 
      style={{ backgroundImage: `url('${avatarUrl}')` }}
      >
    </div>
      {user && (
        <div className="options">
          {/* <Button>Edit profile</Button> */}
          {logginedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Edit Profile</Button>}
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Edit Profile">
        Edit Form
      </ConfigModal>

    </div>
  );
}