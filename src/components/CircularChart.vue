<template>
    <div class="chart-wrapper">
      <Doughnut :chart-data="chartData" :options="chartOptions" />
      <div class="chart-label">{{ label }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { Doughnut } from 'vue-chartjs';
  import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip);
  
  const props = defineProps<{
    percentage: number;
    label: string;
  }>();
  
  const chartData = computed(() => ({
    datasets: [
      {
        data: [props.percentage, 100 - props.percentage],
        backgroundColor: ['#ff0000', '#000000'],
        borderWidth: 0,
      },
    ],
  }));
  
  const chartOptions = {
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };
  </script>
  
  <style scoped>
  .chart-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
  }
  
  .chart-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff0000;
  }
  </style>