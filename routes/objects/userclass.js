"use strict";
module.exports = function userclass(user) {
  this.token = user.accessToken;
  this.id = user.id;
  this.name = user.name;
  this.birthday = user.birthday;
  this.email = user.email;
  if(user.picture != null){
    this.pic = user.picture.data.url;
  }else{
    this.pic = '';
  }

}
