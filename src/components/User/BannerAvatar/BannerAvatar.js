import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../EditUserForm";
import { checkFollowApi, followUserApi, unFollowUserApi } from "../../../api/follow";
import { API_HOST } from "../../../utils/constant";
import { uploadAvatarApi } from "../../../api/user";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, logginedUser } = props;
  const [showModal, setShowModal] = useState(false);
  const [following, setFollowing] = useState(null);
  const [reloadFollow, setReloadFollow] = useState(false);
  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;
  const avatarUrl = user?.avatar ? `${API_HOST}/getAvatar?id=${user.id}` : AvatarNoFound;

  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null)
  const changeUploadFile = async (event) => {
    const file  = event.target.files[0];
    console.log(event.target);
    console.log(file);
    console.log(avatarFile);
    setAvatarFile(file);

    event.target.value = '';
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    if (avatarFile) {
      await uploadAvatarApi(avatarFile).catch(() => {
        toast.error("Error upload avatar");
      });
    }

    setLoading(false);
    window.location.reload();
  }

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
    <div className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}' )` }}
    >
    <div 
      className="avatar" 
      style={{ backgroundImage: `url('${avatarUrl}' )` }}
      >
    </div>
    <div className="upload-avatar-button">
      <h4>Upload new icon</h4>
      <input type='file' accept="image/png,image/jpeg" onChange={changeUploadFile}/>
      <Button onClick={onSubmit} className="btn-submit" variant="primary" type="submit">
        Update Image
      </Button>
    </div>
      {user && (
        <div className="options">
          {logginedUser._id === user.id && <Button onClick={() => setShowModal(true)}>編集する</Button>}

          {logginedUser._id !== user.id &&
            following !== null &&
            (following ? (
              <Button onClick={onUnFollow}>フォロー中
                  <span>Unfollow?</span>
                </Button>
              ) : (
                <Button onClick={onFollow}>フォローする</Button>
                ))}
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="あなたの現在のプロフィール">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>

    </div>
  );
}