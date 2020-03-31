import { FC } from "react";

import { TeamType } from "../../team";
import { Wrapper } from "./styles";

const ProfileCard: FC<{ data: TeamType }> = ({
  data: { fullName, title, description, from, basedIn }
}) => (
  <Wrapper>
    <div>
      <h2>{fullName}</h2>
      <p>{title}</p>
      <p>
        Based in {basedIn} From {from}
      </p>
      <p>{description}</p>
    </div>
    <div>
      <img
        width="315px"
        height="440px"
        src="https://via.placeholder.com/630x880"
        alt={fullName}
      />
    </div>
  </Wrapper>
);

export default ProfileCard;
