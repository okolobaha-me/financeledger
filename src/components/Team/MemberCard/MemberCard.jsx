import { Card, Name } from '../Team.styled';
import { Picture } from '../../Picture/Picture';
import { Text } from '../../Typography/Typography.styled';

export const MemberCard = ({ name, position, photo, contacts }) => {
   return (
      <Card>
         <Picture {...photo} name={name} />
         {/*<Name>{name}</Name>*/}
         {/*<Text>{position}</Text>*/}
      </Card>
   );
};
