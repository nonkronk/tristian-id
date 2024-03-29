import styled from '@emotion/styled';

import { regularLightTextStyle, regularTextStyle } from '../../styles/_typographies';
import { fileType } from '../../helpers/utils';

const LsOutputContainer = styled.div`
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    display: flex;
    flex-direction: ${({longOption}) => {
        return longOption ? 'column': 'row';
    }};
    > * + * {
        ${({longOption}) => {
        return longOption ? "margin-top: 5px" : "margin-left: 30px";
        }};
    }
    ${regularTextStyle};
`;

const LsItemDiv = styled.div`
    color: ${({itemType, ...props}) => {
        if (itemType === fileType.dir) {
            return props.theme.colors.papayaWhip;
        } else if(itemType === fileType.exec) {
            return props.theme.colors.fireOpal;
        }
        return props.theme.colors.white;
    }};
    display: flex;
    flex-direction: row;
    > * + * {
        margin-left: 30px
    }
    ${regularTextStyle};
`;

const PermsInfoDiv = styled.div`
    color: ${(props) => props.theme.colors.opal};
    ${regularLightTextStyle};
`;

export default function LsOutput({files, longOption}){
    return (
        <LsOutputContainer longOption={longOption}>
            {longOption ? <LsItemDiv> total {files.length} </LsItemDiv> : null}
            {files.map((file, index) => {
                return (
                    <div key={index}>
                        <LsItemDiv itemType={file.type}>
                            {longOption ? <PermsInfoDiv>{file.longView}</PermsInfoDiv> : null}
                            <div> {file.name} </div>
                        </LsItemDiv>
                    </div>
                )
            })}
        </LsOutputContainer>
    ) 
}

export function TabCompletionOptionsOutput({options}){
    return (
        <LsOutputContainer longOption={false}>
            {
                options.map((option, index)=> {
                    return (
                        <div key={index}>
                            <LsItemDiv itemType={fileType.regular}>
                            <div>{option}</div>
                            </LsItemDiv>
                        </div>
                    )
                })
            }
        </LsOutputContainer>
    )
}