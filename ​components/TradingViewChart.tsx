'use client';

import React, { useEffect, useRef, memo } from 'react';

interface TradingViewChartProps {
  symbol: string;
  theme?: 'dark' | 'light';
  interval?: string;
  height?: number;
}

function TradingViewChartComponent({
  symbol,
  theme = 'dark',
  interval = 'D',
  height = 280,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous widget script if present
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: interval,
      timezone: 'Etc/UTC',
      theme: theme,
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: false,
      save_image: false,
      backgroundColor: 'rgba(10, 10, 12, 1)',
      gridColor: 'rgba(255, 255, 255, 0.03)',
      allow_symbol_change: false,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    });

    containerRef.current.appendChild(script);
  }, [symbol, theme, interval]);

  return (
    <div className="w-full relative rounded overflow-hidden border border-white/5 bg-[#0A0A0C]" style={{ height: `${height}px` }}>
      <div ref={containerRef} className="tradingview-widget-container h-full w-full">
        <div className="tradingview-widget-container__widget h-full w-full"></div>
      </div>
    </div>
  );
}

export const TradingViewChart = memo(TradingViewChartComponent);
