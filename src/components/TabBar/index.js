import React, { useState }  from 'react'
import { 
    Container, 
    SubContainer, 
    GroupAction, 
    ActionName
} from './styles'
import Icon from 'react-native-vector-icons/Foundation';

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
                    <Icon name="list" {...iconConfigure}/>
                    <ActionName>
                        Sua biblioteca
                    </ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
}
export default TabBar ;