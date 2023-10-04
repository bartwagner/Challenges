import React from 'react'
import Option from './Option'
import background from './SelectOptions/background'
import photo from './SelectOptions/photo'
import color from './SelectOptions/color'
import font from './SelectOptions/font'
import column from './SelectOptions/column'
import gap from './SelectOptions/gap'
import emoji from './SelectOptions/emoji'

function SelectOption(props){

    let optionValue = ''
    let selectValue = ''
    let selectChangeValue = ''

    /*--------------- I am checking the id if background I grab the information about--------------- 
    -- background(SelectOptions/background) set the optionValue, selectValue and selectChangeValue-- 
    ---------------------------the code made the same for another ids-----------------------------*/
    if(props.id == 'background'){
        const backgroundSelect = background.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = backgroundSelect
        selectValue = props.selectedBackground
        selectChangeValue = props.setSelectedBackground
    }
    else if(props.id == 'photo'){
        const photoSelect = photo.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = photoSelect
        selectValue = props.selectPhoto
        selectChangeValue = props.setSelectPhoto
    }
    else if(props.id == 'color'){
        const colorSelect = color.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = colorSelect
        selectValue = props.selectColor
        selectChangeValue = props.setSelectColor
    }
    else if(props.id == 'font'){
        const fontSelect = font.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = fontSelect
        selectValue = props.selectFont
        selectChangeValue = props.setSelectFont
    }
    else if(props.id == 'column'){
        const columnSelect = column.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = columnSelect
        selectValue = props.selectColumn
        selectChangeValue = props.setSelectColumn
    }
    else if(props.id == 'gap'){
        const gapSelect = gap.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = gapSelect
        selectValue = props.selectGap
        selectChangeValue = props.setSelectGap
    }
    else if(props.id == 'emoji'){
        const emojiSelect = emoji.map(item => {
            return(
                <Option {...item}/>
            )
        })
        optionValue = emojiSelect
        selectValue = props.isEmoji
        selectChangeValue = props.setIsEmoji
    }

    return(
        <div className='div-select'>
            <label className="form-label">{props.label} </label>
            <select className='select-option' value={selectValue} onChange = {e => selectChangeValue(e.target.value)}>
                {optionValue}
            </select>

        </div>
    )
}

export default SelectOption