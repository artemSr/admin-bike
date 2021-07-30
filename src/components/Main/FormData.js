import React,{useState} from "react";


export default function FormData({bikes,onCreate}){
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [wheelSize, setWheelSize] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    function handleClear(){
        setName('');
        setType('');
        setColor('');
        setWheelSize('');
        setPrice('');
        setId('');
        setDescription('');
    }
    function submitHandler(event){
        event.preventDefault();
        if (isNaN(price)||isNaN(id)||isNaN(wheelSize)){
                setErrors({
                    message: 'Числовые поля должны принимать только число'
                })
            setTimeout(()=>{
                setErrors('');
            },3000)
            return
        }
        if (!name.length||!type.length||!color.length||!wheelSize.length||!price.length||!id.length||!description.length){
            setErrors({
                message: 'Все поля обязательны к заполнению'
            })
            setTimeout(()=>{
                setErrors('');
            },3000)
            return
        }
        if (name.length < 5|| type.length < 5|| color.length < 5|| description.length < 5){
            setErrors({
                message: 'Минимальная длина всех текстовых полей должна составлять 5 символов'
            })
            setTimeout(()=>{
                setErrors('');
            },3000)
            return
        }
        if (bikes.length){
            if (bikes.find(bike => bike.id ===id)) {
                setErrors({
                    message: 'Идентификатор должен быть уникальным'
                })
                setTimeout(()=>{
                    setErrors('');
                },3000)
                return;
            }
        }

        if (name.trim()&& type.trim()&&color.trim()&&description.trim()) {
            onCreate(name, type, color, wheelSize, price, id, description);
            handleClear()
        }
    }
    return(
        <div>
            <form onSubmit={submitHandler} className={'bike-form'}>
                {errors?<h1 className={'error-message'}>{errors.message}</h1>: <h1> </h1>}
                <div className={'first-form-wrapper'}>
                    <input type="text" name={'Name'} placeholder={'Name'} value={name}  onChange={event => setName(event.target.value)}/>
                    <input type="text" name={'Type'} placeholder={'Type'} value={type} onChange={event => setType(event.target.value)}/>
                    <input type="text" name={'Color'} placeholder={'Color'} value={color} onChange={event => setColor(event.target.value)}/>
                    <input type="text" name={'Wheel size'} placeholder={'Wheel size'} value={wheelSize} onChange={event => setWheelSize(event.target.value)}/>
                    <input type="text" name={'Price'} placeholder={'Price'} value={price} onChange={event => setPrice(event.target.value)}/>
                    <input type="text" name={'ID'} placeholder={'ID (slug): ХХХХХХХХХХХХХ'} value={id} onChange={event => setId(event.target.value)}/>
                </div>
                <div className={'second-form-wrapper'}>
                    <input className={'description'} type="text" name={'Description'} placeholder={'Description'} value={description} onChange={event => setDescription(event.target.value)}/>
                    <div className={'button-wrapper'}>
                        <button type="submit">SAVE</button>
                        <button type="reset" onClick={handleClear}>CLEAR</button>
                    </div>
                </div>
            </form>
        </div>
    )
}