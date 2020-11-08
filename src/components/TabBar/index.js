import React, { useState }  from 'react'
import { 
    Container, 
    SubContainer, 
    GroupAction, 
    ActionName
} from './styles'
import Icon from 'react-native-vector-icons/Foundation';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBar = () =>{
    const [iconConfigure] = useState({
        color:'#fff',
        size:22
    })
    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <Icon name="home" {...iconConfigure}/>
                    <ActionName>
                        Início
                    </ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="magnifying-glass" {...iconConfigure}/>
                    <ActionName>
                        Buscar
                    </ActionName>
                </GroupAction>
                <GroupAction>
                    <Icone name="view-parallel" {...iconConfigure}/>
                    <ActionName>
                        Sua biblioteca
                    </ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
}
export default TabBar ;