package com.yanchware.ff8_hb;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    //declaration
    private WebView frame;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        frame = (WebView) findViewById(R.id.webview);

        WebSettings webSettings = frame.getSettings();

        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);

        //this setting here is to prevent the Webview from opening links in a new window.
        frame.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url){
                view.loadUrl(url);
                return true;
            }
        });

        //Uncomment this to debug in chrome: https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/webviews?hl=en#configure-webviews-for-debugging
        //WebView.setWebContentsDebuggingEnabled(true);

        frame.loadUrl("http://ff8.yanchware.com/");

    }
}
