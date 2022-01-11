import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../EditUserForm";
import { checkFollowApi, followUserApi, unFollowUserApi } from "../../../api/follow";
import { API_HOST } from "../../../utils/constant";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, logginedUser } = props;
  const [showModal, setShowModal] = useState(false);
  const [following, setFollowing] = useState(null);
  const [reloadFollow, setReloadFollow] = useState(false);
  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;
  const avatarUrl = user?.avatar ? `${API_HOST}/getAvatar?id=${user.id}` : AvatarNoFound;
  // console.log(user);
  // console.log(logginedUser);

  useEffect(() => {
    if (user) {
      checkFollowApi(user?.id).then(response => {
        // console.log(response);
        if(response?.status) {
          setFollowing(true);
        } else {
          setFollowing(false);
        }
      });
    }
    setReloadFollow(false);
  }, [user, reloadFollow]);

  const onFollow = () => {
    followUserApi(user.id).then(() => {
      setReloadFollow(true);
    });
  }

  const onUnFollow = () => {
    unFollowUserApi(user.id).then(() => {
      setReloadFollow(true);
    });
  }

  return (
    // <div className="banner-avatart" style={{ backgroundImage: `url('${bannerUrl}')` }}>
    <div className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}' )` }}
    >
    <div 
      className="avatar" 
      style={{ backgroundImage: `url('${avatarUrl}' )` }}
      >
    </div>
      {user && (
        <div className="options">
          {/* <Button>Edit profile</Button> */}
          {logginedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Edit Profile</Button>}

          {logginedUser._id !== user.id &&
            following !== null &&
              (following ? (
                <Button onClick={onUnFollow}>フォロー中
                  <span>Unfollow</span>
                </Button>
              ) : (
                <Button onClick={onFollow}>フォローする</Button>
              ))}
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Edit Profile">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>

    </div>
  );
}