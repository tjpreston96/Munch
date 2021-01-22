import React from 'react';
import './ProfileCard.css'

const UserImgUpload =({
  onChange,src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img className='userProfile' alt='userPic' for="photo-upload" src={src}/>
    </div>
    <br/>
     <input className='chooseFile' id="photo-upload" type="file" onChange={onChange}/>

  </label>


const Name =({
  onChange,
  value
})=>
  <div className="field">
    <label className= 'cardProfile' htmlFor="name">
      name:
    </label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="20"
      value={value}
      required/>
  </div>


const Bio =({
  onChange,
  value
})=>
<div className="field">
<label className= 'cardProfile' htmlFor="bio">
  Bio:
</label>
<input
  id="name"
  type="text"
  onChange={onChange}
  maxlength="500"
  value={value}
  required/>
</div>

const Profile =({
  onSubmit,
  src,
  name,
  bio
})=>
  <div className="profilePic">
    <form className='cardProfile'onSubmit={onSubmit}>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img className='userProfile' alt="" for="photo-upload" src={src}/>
        </div>
      </label>
      <div className='inputProfile'>
        <div className="name">{name}</div>
        <div className='bio'>{bio}</div>
      <button type="submit" className="edit">Edit Profile </button>
      </div>
    </form>
  </div>


const Edit =({
  onSubmit,
  children,
})=>
  <div className="profilePic">
    <form onSubmit={onSubmit}>
        {children}
      <button type="submit" className="save">Save </button>
    </form>
  </div>

class ProfileCard extends React.Component {
  state = {
    file: '',
    imgUrl: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    name:'',
    bio: '',
    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName = e =>{
    const name = e.target.value;
    this.setState({
      name,
    });
  }

  editBio = e => {
    const bio = e.target.value;
    this.setState({
      bio,
    });
  }

  handleSubmit= e =>{
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }

  render() {
    const {imageUrl,
           name,
           bio,
           active} = this.state;
    return (
      <div>


        {(active === 'edit')?(
          <Edit onSubmit={this.handleSubmit}>
            <UserImgUpload onChange={this.photoUpload} src={imageUrl}/>
            <Name onChange={this.editName} value={name}/>
            <Bio onChange={this.editBio} value={bio}/>
          </Edit>
        ):(
          <Profile
            onSubmit={this.handleSubmit}
            src={imageUrl}
            name={name}
            bio={bio}/>)}
      </div>
    )
  }
}

export default ProfileCard;