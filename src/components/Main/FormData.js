import React from "react";

export default function FormData(){
    return(
        <div>
            <form className={'bike-from'} action="">
                <div className={'first-form-wrapper'}>
                    <input type="text" name={'Name'} placeholder={'Name'}/>
                    <input type="text" name={'Type'} placeholder={'Type'}/>
                    <input type="text" name={'Color'} placeholder={'Color'}/>
                    <input type="text" name={'Wheel size'} placeholder={'Wheel size'}/>
                    <input type="text" name={'Price'} placeholder={'Price'}/>
                    <input type="text" name={'ID'} placeholder={'ID (slug): ХХХХХХХХХХХХХ'}/>
                </div>
                <div className={'second-form-wrapper'}>
                    <input className={'description'} type="text" name={'Description'} placeholder={'Description'}/>
                    <div className={'button-wrapper'}>
                        <input type="submit" value={'SAVE'}/>
                        <input type="reset" value={'CLEAR'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}