document.getElementById('startCapture').addEventListener('click', () => {
    // Simulate packet data (In reality, packet capturing is done with backend support)
    const packets = [
        { source: '192.168.0.1', destination: '192.168.0.2', protocol: 'TCP', payload: 'Hello, World!' },
        { source: '192.168.0.2', destination: '192.168.0.3', protocol: 'UDP', payload: 'Ping' },
        // More packet data can be added here
    ];

    const tableBody = document.querySelector('#packetTable tbody');
    tableBody.innerHTML = ''; // Clear existing data

    packets.forEach(packet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${packet.source}</td>
            <td>${packet.destination}</td>
            <td>${packet.protocol}</td>
            <td>${packet.payload}</td>
        `;
        tableBody.appendChild(row);
    });
});
