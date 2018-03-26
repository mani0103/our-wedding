import React from 'react';


export default CustonCheckBox = (props) => {
    return (
        <div class="exp" key={props.item}>
            <div class="checkbox">
                <form>
                    <div>
                    <input type="checkbox" id="check" name="check" value="" />
                    <label for="check">
                        <span></span>
                        Checkbox
                    </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
