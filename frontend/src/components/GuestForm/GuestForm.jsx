// import React, { useState } from 'react';
// import './style.scss';

// function GuestForm() {
//     const [guests, setGuests] = useState([{
//         lastName: '',
//         firstName: '',
//         middleName: ''
//     }]);
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleInputChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedGuests = [...guests];
//         updatedGuests[index][name] = value;
//         setGuests(updatedGuests);
//     };

//     const addGuest = () => {
//         setGuests([...guests, {
//             lastName: '',
//             firstName: '',
//             middleName: ''
//         }]);
//     };

//     const removeGuest = (index) => {
//         if (guests.length > 1) {
//             const updatedGuests = guests.filter((_, i) => i !== index);
//             setGuests(updatedGuests);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Список гостей отправлен:', guests);
//         setIsSubmitted(true);
//         // setGuests([{ lastName: '', firstName: '', middleName: '' }]); // Очистка формы
//     };

//     return (
//         <div className="guest-form-container">
//             {/* <h2>Добавление гостей</h2>
//        */}
//             {isSubmitted && (
//                 <div className="success-message">
//                     Список гостей успешно отправлен!
//                 </div>
//             )}

//             <form onSubmit={handleSubmit} className="guest-form">
//                 {guests.map((guest, index) => (
//                     <div key={index} className="guest-fields">
//                         <h3>Гость #{index + 1}</h3>
//                         <div className="form-group">
//                             <label>Введите ФИО:</label>
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 value={guest.lastName}
//                                 placeholder='Иванов Иван Иванович'
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 required
//                             />
//                         </div>

//                         {/* <div className="form-group">
//                             <label>Имя:</label>
//                             <input
//                                 placeholder='Имя'
//                                 type="text"
//                                 name="firstName"
//                                 value={guest.firstName}
//                                 onChange={(e) => handleInputChange(index, e)}
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Отчество (необязательно):</label>
//                             <input
//                                 placeholder='Отчество (необязательно)'
//                                 type="text"
//                                 name="middleName"
//                                 value={guest.middleName}
//                                 onChange={(e) => handleInputChange(index, e)}
//                             />
//                         </div> */}

//                         {guests.length > 1 && (
//                             <button
//                                 type="button"
//                                 onClick={() => removeGuest(index)}
//                                 className="remove-button"
//                             >
//                                 Удалить гостя
//                             </button>
//                         )}
//                     </div>
//                 ))}

//                 <div className="buttons-container">
//                     <button
//                         type="button"
//                         onClick={addGuest}
//                         className="add-button"
//                     >
//                         Добавить гостя
//                     </button>

//                     <button
//                         type="submit"
//                         className="submit-button"
//                         // disabled={guests.some(g => !g.lastName || !g.firstName)}
//                         disabled={guests.some(g => !g.lastName)}
//                     >
//                         Подтвердить
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default GuestForm;
import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';

function GuestForm() {
    const [guests, setGuests] = useState([{
        name: '' // Объединенное поле ФИО
    }]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedGuests = [...guests];
        updatedGuests[index][name] = value;
        setGuests(updatedGuests);
    };

    const addGuest = () => {
        setGuests([...guests, {
            name: ''
        }]);
    };

    const removeGuest = (index) => {
        if (guests.length > 1) {
            const updatedGuests = guests.filter((_, i) => i !== index);
            setGuests(updatedGuests);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        console.log(guests)

        try {
            // Отправка данных на бэкенд
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}guests/`, {
                users: guests.map(g => ({
                    name: g.name.trim()
                }))
                
            });

            console.log('Ответ сервера:', response.data);
            setIsSubmitted(true);
            setGuests([{ name: '' }]); // Сброс формы
            
        } catch (err) {
            console.error('Ошибка при отправке:', err);
            setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="guest-form-container">
            {isSubmitted && (
                <div className="success-message">
                    Список гостей успешно отправлен!
                </div>
            )}

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="guest-form">
                {guests.map((guest, index) => (
                    <div key={index} className="guest-fields">
                        <h3>Гость #{index + 1}</h3>
                        <div className="form-group">
                            <label>Введите ФИО:</label>
                            <input
                                type="text"
                                name="name"
                                value={guest.name}
                                placeholder="Иванов Иван Иванович"
                                onChange={(e) => handleInputChange(index, e)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {guests.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeGuest(index)}
                                className="remove-button"
                                disabled={isLoading}
                            >
                                Удалить гостя
                            </button>
                        )}
                    </div>
                ))}

                <div className="buttons-container">
                    <button
                        type="button"
                        onClick={addGuest}
                        className="add-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Загрузка...' : 'Добавить гостя'}
                    </button>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isLoading || guests.some(g => !g.name.trim())}
                    >
                        {isLoading ? 'Отправка...' : 'Подтвердить'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GuestForm;