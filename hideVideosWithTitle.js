function hideVideosWithSheldon() {
  // Select all video items
  const videoItems = document.querySelectorAll('ytd-rich-item-renderer');

  videoItems.forEach(item => {
    // Extract the video title
    const videoTitleElement = item.querySelector('yt-formatted-string#video-title');
    const videoTitle = videoTitleElement ? videoTitleElement.textContent.trim() : '';

    // Extract the channel name
    const channelNameElement = item.querySelector('ytd-channel-name#channel-name yt-formatted-string#text');
    const channelName = channelNameElement ? channelNameElement.textContent.trim() : '';

    // Check if the video title or channel name contains 'Sheldon'
    if (videoTitle.includes('Sheldon') || channelName.includes('Sheldon')) {
      // Set the display style to 'none' to hide the video item
      item.style.display = 'none';
    }
  });
}

// Call the function to hide videos with 'Sheldon' in the title or channel name
hideVideosWithSheldon();
