<template>
    <div id="app">
        <div class="room-container">
            <div class="decoration circle"></div>
            <div class="decoration square"></div>
            
            <h1>Сторінка кімнати</h1>
            <p class="room-id">ID кімнати: {{ roomId }}</p>
            
            <div class="status-selector">
                <label class="status-label">Оберіть ваш статус:</label>
                <div class="select-wrapper">
                    <select name="status" id="status" v-model="status">
                        <option value="online">🟢 Онлайн</option>
                        <option value="worken">🟠 Працюю</option>
                        <option value="offline">🔴 Офлайн</option>
                    </select>
                </div>
            </div>
            
            <div class="status-message" :class="status">
                <span class="status-icon">
                    <i v-if="status === 'online'" class="fas fa-check-circle"></i>
                    <i v-else-if="status === 'worken'" class="fas fa-laptop"></i>
                    <i v-else-if="status === 'offline'" class="fas fa-times-circle"></i>
                </span>
                <p v-if="status === 'online'">Ви зараз онлайн!</p>
                <p v-else-if="status === 'worken'">Ви працюєте.</p>
                <p v-else-if="status === 'offline'">Ви офлайн.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomPage',
    data() {
        return {
            roomId: this.$route.params.id,
            status: 'offline'
        };
    },
};

</script>



    <style scoped>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .room-container {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            max-width: 600px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .room-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            transform: rotate(30deg);
            z-index: -1;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            background: linear-gradient(to right, #fdbb2d, #b21f1f);
            /* -webkit-background-clip: text; */
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .room-id {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: rgba(44, 73, 53, 0.9);
        }
        
        .status-selector {
            margin: 30px 0;
            position: relative;
        }
        
        .status-label {
            display: block;
            margin-bottom: 10px;
            font-weight: 600;
            color: #fdbb2d;
            font-size: 1.1rem;
        }
        
        select {
            width: 100%;
            padding: 15px 20px;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            color: rgb(203, 122, 122);
            font-size: 1rem;
            cursor: pointer;
            appearance: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border: 2px solid transparent;
        }
        
        select:focus {
            outline: none;
            border-color: #fdbb2d;
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
        }
        
        select:hover {
            background: rgba(255, 255, 255, 0.12);
        }
        
        .select-wrapper {
            position: relative;
        }
        
        .select-wrapper::after {
            content: '\f078';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #fdbb2d;
            pointer-events: none;
        }
        
        .status-message {
            margin-top: 25px;
            padding: 20px;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 500;
            animation: fadeIn 0.5s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .status-message:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .online {
            background: rgba(46, 125, 50, 0.2);
            color: #a5d6a7;
            border: 1px solid rgba(76, 175, 80, 0.3);
        }
        
        .worken {
            background: rgba(255, 152, 0, 0.2);
            color: #ffcc80;
            border: 1px solid rgba(255, 152, 0, 0.3);
        }
        
        .offline {
            background: rgba(198, 40, 40, 0.2);
            color: #ef9a9a;
            border: 1px solid rgba(198, 40, 40, 0.3);
        }
        
        .status-icon {
            margin-right: 10px;
            font-size: 1.4rem;
        }
        
        .decoration {
            position: absolute;
            z-index: -1;
        }
        
        .decoration.circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(253, 187, 45, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
            top: -30px;
            right: -30px;
        }
        
        .decoration.square {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, rgba(26, 42, 108, 0.2), rgba(0, 0, 0, 0));
            bottom: -20px;
            left: -20px;
            transform: rotate(45deg);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 600px) {
            .room-container {
                padding: 25px;
            }
            
            h1 {
                font-size: 2rem;
            }
        }
    </style>