import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface Props {
  profile: Profile;
}

export default observer(function ProfileCard({ profile }: Props) {

  function truncate(str: string | undefined){
    if (str){
      return str.length > 27 ? str.substring(0,24) + '...' : str;
    }
  }

  return (
    <Card as={Link} to={`/profiles/${profile.username}`}>
      <Image src={profile.image || "/assets/user.png"} />
      <Card.Content>
        <Card.Header>
          {profile.displayName}
          <Card.Description>{truncate(profile.bio)}</Card.Description>
        </Card.Header>
        <Card.Content extra>
          <Icon name="user" />
          20 followers
        </Card.Content>
      </Card.Content>
    </Card>
  );
});
